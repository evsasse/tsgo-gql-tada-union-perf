import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1333 } from "./fragment1333";
import type { FragmentToken1334 } from "./fragment1334";

export const FRAGMENT_1335 = gql(`
  fragment Fragment1335 on Member214 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_214
    memberCount_214
    memberMetric_214
  }
`);

type FragmentResult1335 = ResultOf<typeof FRAGMENT_1335>;
type FragmentSelf1335 = NonNullable<FragmentResult1335>;

export type FragmentToken1335 =
  | FragmentSelf1335["__typename"]
  | FragmentSelf1335["typenameHint"] | FragmentToken1333 | FragmentToken1334;
