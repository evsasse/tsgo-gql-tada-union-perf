import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken371 } from "./fragment371";
import type { FragmentToken372 } from "./fragment372";

export const FRAGMENT_373 = gql(`
  fragment Fragment373 on Member92 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_92
    memberCount_92
    memberMetric_92
  }
`);

type FragmentResult373 = ResultOf<typeof FRAGMENT_373>;
type FragmentSelf373 = NonNullable<FragmentResult373>;

export type FragmentToken373 =
  | FragmentSelf373["__typename"]
  | FragmentSelf373["typenameHint"] | FragmentToken371 | FragmentToken372;
