import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4355 } from "./fragment4355";
import type { FragmentToken4356 } from "./fragment4356";

export const FRAGMENT_4357 = gql(`
  fragment Fragment4357 on Member156 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_156
    memberCount_156
    memberMetric_156
  }
`);

type FragmentResult4357 = ResultOf<typeof FRAGMENT_4357>;
type FragmentSelf4357 = NonNullable<FragmentResult4357>;

export type FragmentToken4357 =
  | FragmentSelf4357["__typename"]
  | FragmentSelf4357["typenameHint"] | FragmentToken4355 | FragmentToken4356;
