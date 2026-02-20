import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4598 } from "./fragment4598";
import type { FragmentToken4599 } from "./fragment4599";

export const FRAGMENT_4600 = gql(`
  fragment Fragment4600 on Member119 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_119
    memberCount_119
    memberMetric_119
  }
`);

type FragmentResult4600 = ResultOf<typeof FRAGMENT_4600>;
type FragmentSelf4600 = NonNullable<FragmentResult4600>;

export type FragmentToken4600 =
  | FragmentSelf4600["__typename"]
  | FragmentSelf4600["typenameHint"] | FragmentToken4598 | FragmentToken4599;
