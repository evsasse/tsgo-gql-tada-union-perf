import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3839 } from "./fragment3839";
import type { FragmentToken3840 } from "./fragment3840";

export const FRAGMENT_3841 = gql(`
  fragment Fragment3841 on Member200 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_200
    memberCount_200
    memberMetric_200
  }
`);

type FragmentResult3841 = ResultOf<typeof FRAGMENT_3841>;
type FragmentSelf3841 = NonNullable<FragmentResult3841>;

export type FragmentToken3841 =
  | FragmentSelf3841["__typename"]
  | FragmentSelf3841["typenameHint"] | FragmentToken3839 | FragmentToken3840;
