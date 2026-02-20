import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4755 } from "./fragment4755";
import type { FragmentToken4756 } from "./fragment4756";

export const FRAGMENT_4757 = gql(`
  fragment Fragment4757 on Member276 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_276
    memberCount_276
    memberMetric_276
  }
`);

type FragmentResult4757 = ResultOf<typeof FRAGMENT_4757>;
type FragmentSelf4757 = NonNullable<FragmentResult4757>;

export type FragmentToken4757 =
  | FragmentSelf4757["__typename"]
  | FragmentSelf4757["typenameHint"] | FragmentToken4755 | FragmentToken4756;
