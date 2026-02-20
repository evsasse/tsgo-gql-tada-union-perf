import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken917 } from "./fragment917";
import type { FragmentToken918 } from "./fragment918";

export const FRAGMENT_919 = gql(`
  fragment Fragment919 on Member78 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_78
    memberCount_78
    memberMetric_78
  }
`);

type FragmentResult919 = ResultOf<typeof FRAGMENT_919>;
type FragmentSelf919 = NonNullable<FragmentResult919>;

export type FragmentToken919 =
  | FragmentSelf919["__typename"]
  | FragmentSelf919["typenameHint"] | FragmentToken917 | FragmentToken918;
