import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken344 } from "./fragment344";
import type { FragmentToken345 } from "./fragment345";

export const FRAGMENT_346 = gql(`
  fragment Fragment346 on Member65 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_65
    memberCount_65
    memberMetric_65
  }
`);

type FragmentResult346 = ResultOf<typeof FRAGMENT_346>;
type FragmentSelf346 = NonNullable<FragmentResult346>;

export type FragmentToken346 =
  | FragmentSelf346["__typename"]
  | FragmentSelf346["typenameHint"] | FragmentToken344 | FragmentToken345;
