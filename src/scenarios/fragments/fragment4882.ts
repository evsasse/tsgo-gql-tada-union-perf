import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4880 } from "./fragment4880";
import type { FragmentToken4881 } from "./fragment4881";

export const FRAGMENT_4882 = gql(`
  fragment Fragment4882 on Member121 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_121
    memberCount_121
    memberMetric_121
  }
`);

type FragmentResult4882 = ResultOf<typeof FRAGMENT_4882>;
type FragmentSelf4882 = NonNullable<FragmentResult4882>;

export type FragmentToken4882 =
  | FragmentSelf4882["__typename"]
  | FragmentSelf4882["typenameHint"] | FragmentToken4880 | FragmentToken4881;
