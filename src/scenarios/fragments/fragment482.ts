import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken480 } from "./fragment480";
import type { FragmentToken481 } from "./fragment481";

export const FRAGMENT_482 = gql(`
  fragment Fragment482 on Member201 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_201
    memberCount_201
    memberMetric_201
  }
`);

type FragmentResult482 = ResultOf<typeof FRAGMENT_482>;
type FragmentSelf482 = NonNullable<FragmentResult482>;

export type FragmentToken482 =
  | FragmentSelf482["__typename"]
  | FragmentSelf482["typenameHint"] | FragmentToken480 | FragmentToken481;
