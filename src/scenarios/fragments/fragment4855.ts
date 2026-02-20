import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4853 } from "./fragment4853";
import type { FragmentToken4854 } from "./fragment4854";

export const FRAGMENT_4855 = gql(`
  fragment Fragment4855 on Member94 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_94
    memberCount_94
    memberMetric_94
  }
`);

type FragmentResult4855 = ResultOf<typeof FRAGMENT_4855>;
type FragmentSelf4855 = NonNullable<FragmentResult4855>;

export type FragmentToken4855 =
  | FragmentSelf4855["__typename"]
  | FragmentSelf4855["typenameHint"] | FragmentToken4853 | FragmentToken4854;
