import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4837 } from "./fragment4837";
import type { FragmentToken4838 } from "./fragment4838";

export const FRAGMENT_4839 = gql(`
  fragment Fragment4839 on Member78 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_78
    memberCount_78
    memberMetric_78
  }
`);

type FragmentResult4839 = ResultOf<typeof FRAGMENT_4839>;
type FragmentSelf4839 = NonNullable<FragmentResult4839>;

export type FragmentToken4839 =
  | FragmentSelf4839["__typename"]
  | FragmentSelf4839["typenameHint"] | FragmentToken4837 | FragmentToken4838;
