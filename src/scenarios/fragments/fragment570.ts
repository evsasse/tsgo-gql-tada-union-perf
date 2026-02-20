import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken568 } from "./fragment568";
import type { FragmentToken569 } from "./fragment569";

export const FRAGMENT_570 = gql(`
  fragment Fragment570 on Member09 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_09
    memberCount_09
    memberMetric_09
  }
`);

type FragmentResult570 = ResultOf<typeof FRAGMENT_570>;
type FragmentSelf570 = NonNullable<FragmentResult570>;

export type FragmentToken570 =
  | FragmentSelf570["__typename"]
  | FragmentSelf570["typenameHint"] | FragmentToken568 | FragmentToken569;
