import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4881 } from "./fragment4881";
import type { FragmentToken4882 } from "./fragment4882";

export const FRAGMENT_4883 = gql(`
  fragment Fragment4883 on Member122 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_122
    memberCount_122
    memberMetric_122
  }
`);

type FragmentResult4883 = ResultOf<typeof FRAGMENT_4883>;
type FragmentSelf4883 = NonNullable<FragmentResult4883>;

export type FragmentToken4883 =
  | FragmentSelf4883["__typename"]
  | FragmentSelf4883["typenameHint"] | FragmentToken4881 | FragmentToken4882;
