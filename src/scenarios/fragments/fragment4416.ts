import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4414 } from "./fragment4414";
import type { FragmentToken4415 } from "./fragment4415";

export const FRAGMENT_4416 = gql(`
  fragment Fragment4416 on Member215 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_215
    memberCount_215
    memberMetric_215
  }
`);

type FragmentResult4416 = ResultOf<typeof FRAGMENT_4416>;
type FragmentSelf4416 = NonNullable<FragmentResult4416>;

export type FragmentToken4416 =
  | FragmentSelf4416["__typename"]
  | FragmentSelf4416["typenameHint"] | FragmentToken4414 | FragmentToken4415;
