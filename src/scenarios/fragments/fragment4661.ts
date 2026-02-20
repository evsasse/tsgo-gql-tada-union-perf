import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4659 } from "./fragment4659";
import type { FragmentToken4660 } from "./fragment4660";

export const FRAGMENT_4661 = gql(`
  fragment Fragment4661 on Member180 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_180
    memberCount_180
    memberMetric_180
  }
`);

type FragmentResult4661 = ResultOf<typeof FRAGMENT_4661>;
type FragmentSelf4661 = NonNullable<FragmentResult4661>;

export type FragmentToken4661 =
  | FragmentSelf4661["__typename"]
  | FragmentSelf4661["typenameHint"] | FragmentToken4659 | FragmentToken4660;
