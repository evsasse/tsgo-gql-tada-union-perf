import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken359 } from "./fragment359";
import type { FragmentToken360 } from "./fragment360";

export const FRAGMENT_361 = gql(`
  fragment Fragment361 on Member80 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_80
    memberCount_80
    memberMetric_80
  }
`);

type FragmentResult361 = ResultOf<typeof FRAGMENT_361>;
type FragmentSelf361 = NonNullable<FragmentResult361>;

export type FragmentToken361 =
  | FragmentSelf361["__typename"]
  | FragmentSelf361["typenameHint"] | FragmentToken359 | FragmentToken360;
