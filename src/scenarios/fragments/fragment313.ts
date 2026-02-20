import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken311 } from "./fragment311";
import type { FragmentToken312 } from "./fragment312";

export const FRAGMENT_313 = gql(`
  fragment Fragment313 on Member32 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_32
    memberCount_32
    memberMetric_32
  }
`);

type FragmentResult313 = ResultOf<typeof FRAGMENT_313>;
type FragmentSelf313 = NonNullable<FragmentResult313>;

export type FragmentToken313 =
  | FragmentSelf313["__typename"]
  | FragmentSelf313["typenameHint"] | FragmentToken311 | FragmentToken312;
