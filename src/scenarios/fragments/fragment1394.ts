import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1392 } from "./fragment1392";
import type { FragmentToken1393 } from "./fragment1393";

export const FRAGMENT_1394 = gql(`
  fragment Fragment1394 on Member273 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_273
    memberCount_273
    memberMetric_273
  }
`);

type FragmentResult1394 = ResultOf<typeof FRAGMENT_1394>;
type FragmentSelf1394 = NonNullable<FragmentResult1394>;

export type FragmentToken1394 =
  | FragmentSelf1394["__typename"]
  | FragmentSelf1394["typenameHint"] | FragmentToken1392 | FragmentToken1393;
