import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4866 } from "./fragment4866";
import type { FragmentToken4867 } from "./fragment4867";

export const FRAGMENT_4868 = gql(`
  fragment Fragment4868 on Member107 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_107
    memberCount_107
    memberMetric_107
  }
`);

type FragmentResult4868 = ResultOf<typeof FRAGMENT_4868>;
type FragmentSelf4868 = NonNullable<FragmentResult4868>;

export type FragmentToken4868 =
  | FragmentSelf4868["__typename"]
  | FragmentSelf4868["typenameHint"] | FragmentToken4866 | FragmentToken4867;
