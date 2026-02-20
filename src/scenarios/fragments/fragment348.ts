import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken346 } from "./fragment346";
import type { FragmentToken347 } from "./fragment347";

export const FRAGMENT_348 = gql(`
  fragment Fragment348 on Member67 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_67
    memberCount_67
    memberMetric_67
  }
`);

type FragmentResult348 = ResultOf<typeof FRAGMENT_348>;
type FragmentSelf348 = NonNullable<FragmentResult348>;

export type FragmentToken348 =
  | FragmentSelf348["__typename"]
  | FragmentSelf348["typenameHint"] | FragmentToken346 | FragmentToken347;
