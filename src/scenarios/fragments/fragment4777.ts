import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4775 } from "./fragment4775";
import type { FragmentToken4776 } from "./fragment4776";

export const FRAGMENT_4777 = gql(`
  fragment Fragment4777 on Member16 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_16
    memberCount_16
    memberMetric_16
  }
`);

type FragmentResult4777 = ResultOf<typeof FRAGMENT_4777>;
type FragmentSelf4777 = NonNullable<FragmentResult4777>;

export type FragmentToken4777 =
  | FragmentSelf4777["__typename"]
  | FragmentSelf4777["typenameHint"] | FragmentToken4775 | FragmentToken4776;
