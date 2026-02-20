import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3586 } from "./fragment3586";
import type { FragmentToken3587 } from "./fragment3587";

export const FRAGMENT_3588 = gql(`
  fragment Fragment3588 on Member227 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_227
    memberCount_227
    memberMetric_227
  }
`);

type FragmentResult3588 = ResultOf<typeof FRAGMENT_3588>;
type FragmentSelf3588 = NonNullable<FragmentResult3588>;

export type FragmentToken3588 =
  | FragmentSelf3588["__typename"]
  | FragmentSelf3588["typenameHint"] | FragmentToken3586 | FragmentToken3587;
