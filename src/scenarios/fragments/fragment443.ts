import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken441 } from "./fragment441";
import type { FragmentToken442 } from "./fragment442";

export const FRAGMENT_443 = gql(`
  fragment Fragment443 on Member162 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_162
    memberCount_162
    memberMetric_162
  }
`);

type FragmentResult443 = ResultOf<typeof FRAGMENT_443>;
type FragmentSelf443 = NonNullable<FragmentResult443>;

export type FragmentToken443 =
  | FragmentSelf443["__typename"]
  | FragmentSelf443["typenameHint"] | FragmentToken441 | FragmentToken442;
