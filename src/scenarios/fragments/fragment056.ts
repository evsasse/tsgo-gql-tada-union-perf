import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken054 } from "./fragment054";
import type { FragmentToken055 } from "./fragment055";

export const FRAGMENT_056 = gql(`
  fragment Fragment056 on Member55 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_55
    memberCount_55
    memberMetric_55
  }
`);

type FragmentResult056 = ResultOf<typeof FRAGMENT_056>;
type FragmentSelf056 = NonNullable<FragmentResult056>;

export type FragmentToken056 =
  | FragmentSelf056["__typename"]
  | FragmentSelf056["typenameHint"] | FragmentToken054 | FragmentToken055;
