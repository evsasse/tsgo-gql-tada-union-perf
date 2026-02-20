import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken503 } from "./fragment503";
import type { FragmentToken504 } from "./fragment504";

export const FRAGMENT_505 = gql(`
  fragment Fragment505 on Member224 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_224
    memberCount_224
    memberMetric_224
  }
`);

type FragmentResult505 = ResultOf<typeof FRAGMENT_505>;
type FragmentSelf505 = NonNullable<FragmentResult505>;

export type FragmentToken505 =
  | FragmentSelf505["__typename"]
  | FragmentSelf505["typenameHint"] | FragmentToken503 | FragmentToken504;
