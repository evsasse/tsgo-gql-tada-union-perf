import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3539 } from "./fragment3539";
import type { FragmentToken3540 } from "./fragment3540";

export const FRAGMENT_3541 = gql(`
  fragment Fragment3541 on Member180 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_180
    memberCount_180
    memberMetric_180
  }
`);

type FragmentResult3541 = ResultOf<typeof FRAGMENT_3541>;
type FragmentSelf3541 = NonNullable<FragmentResult3541>;

export type FragmentToken3541 =
  | FragmentSelf3541["__typename"]
  | FragmentSelf3541["typenameHint"] | FragmentToken3539 | FragmentToken3540;
