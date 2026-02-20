import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4448 } from "./fragment4448";
import type { FragmentToken4449 } from "./fragment4449";

export const FRAGMENT_4450 = gql(`
  fragment Fragment4450 on Member249 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_249
    memberCount_249
    memberMetric_249
  }
`);

type FragmentResult4450 = ResultOf<typeof FRAGMENT_4450>;
type FragmentSelf4450 = NonNullable<FragmentResult4450>;

export type FragmentToken4450 =
  | FragmentSelf4450["__typename"]
  | FragmentSelf4450["typenameHint"] | FragmentToken4448 | FragmentToken4449;
