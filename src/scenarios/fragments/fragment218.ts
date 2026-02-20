import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken216 } from "./fragment216";
import type { FragmentToken217 } from "./fragment217";

export const FRAGMENT_218 = gql(`
  fragment Fragment218 on Member217 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_217
    memberCount_217
    memberMetric_217
  }
`);

type FragmentResult218 = ResultOf<typeof FRAGMENT_218>;
type FragmentSelf218 = NonNullable<FragmentResult218>;

export type FragmentToken218 =
  | FragmentSelf218["__typename"]
  | FragmentSelf218["typenameHint"] | FragmentToken216 | FragmentToken217;
