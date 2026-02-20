import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4421 } from "./fragment4421";
import type { FragmentToken4422 } from "./fragment4422";

export const FRAGMENT_4423 = gql(`
  fragment Fragment4423 on Member222 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_222
    memberCount_222
    memberMetric_222
  }
`);

type FragmentResult4423 = ResultOf<typeof FRAGMENT_4423>;
type FragmentSelf4423 = NonNullable<FragmentResult4423>;

export type FragmentToken4423 =
  | FragmentSelf4423["__typename"]
  | FragmentSelf4423["typenameHint"] | FragmentToken4421 | FragmentToken4422;
