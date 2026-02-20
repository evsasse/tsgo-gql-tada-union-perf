import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1332 } from "./fragment1332";
import type { FragmentToken1333 } from "./fragment1333";

export const FRAGMENT_1334 = gql(`
  fragment Fragment1334 on Member213 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_213
    memberCount_213
    memberMetric_213
  }
`);

type FragmentResult1334 = ResultOf<typeof FRAGMENT_1334>;
type FragmentSelf1334 = NonNullable<FragmentResult1334>;

export type FragmentToken1334 =
  | FragmentSelf1334["__typename"]
  | FragmentSelf1334["typenameHint"] | FragmentToken1332 | FragmentToken1333;
