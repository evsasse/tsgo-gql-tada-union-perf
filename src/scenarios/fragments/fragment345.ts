import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken343 } from "./fragment343";
import type { FragmentToken344 } from "./fragment344";

export const FRAGMENT_345 = gql(`
  fragment Fragment345 on Member64 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_64
    memberCount_64
    memberMetric_64
  }
`);

type FragmentResult345 = ResultOf<typeof FRAGMENT_345>;
type FragmentSelf345 = NonNullable<FragmentResult345>;

export type FragmentToken345 =
  | FragmentSelf345["__typename"]
  | FragmentSelf345["typenameHint"] | FragmentToken343 | FragmentToken344;
