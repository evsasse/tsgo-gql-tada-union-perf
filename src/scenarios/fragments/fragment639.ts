import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken637 } from "./fragment637";
import type { FragmentToken638 } from "./fragment638";

export const FRAGMENT_639 = gql(`
  fragment Fragment639 on Member78 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_78
    memberCount_78
    memberMetric_78
  }
`);

type FragmentResult639 = ResultOf<typeof FRAGMENT_639>;
type FragmentSelf639 = NonNullable<FragmentResult639>;

export type FragmentToken639 =
  | FragmentSelf639["__typename"]
  | FragmentSelf639["typenameHint"] | FragmentToken637 | FragmentToken638;
