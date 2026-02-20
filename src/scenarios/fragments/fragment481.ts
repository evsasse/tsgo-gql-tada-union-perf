import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken479 } from "./fragment479";
import type { FragmentToken480 } from "./fragment480";

export const FRAGMENT_481 = gql(`
  fragment Fragment481 on Member200 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_200
    memberCount_200
    memberMetric_200
  }
`);

type FragmentResult481 = ResultOf<typeof FRAGMENT_481>;
type FragmentSelf481 = NonNullable<FragmentResult481>;

export type FragmentToken481 =
  | FragmentSelf481["__typename"]
  | FragmentSelf481["typenameHint"] | FragmentToken479 | FragmentToken480;
