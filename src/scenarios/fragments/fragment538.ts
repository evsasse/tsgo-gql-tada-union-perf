import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken536 } from "./fragment536";
import type { FragmentToken537 } from "./fragment537";

export const FRAGMENT_538 = gql(`
  fragment Fragment538 on Member257 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_257
    memberCount_257
    memberMetric_257
  }
`);

type FragmentResult538 = ResultOf<typeof FRAGMENT_538>;
type FragmentSelf538 = NonNullable<FragmentResult538>;

export type FragmentToken538 =
  | FragmentSelf538["__typename"]
  | FragmentSelf538["typenameHint"] | FragmentToken536 | FragmentToken537;
