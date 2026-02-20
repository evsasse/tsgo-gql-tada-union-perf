import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken830 } from "./fragment830";
import type { FragmentToken831 } from "./fragment831";

export const FRAGMENT_832 = gql(`
  fragment Fragment832 on Member271 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_271
    memberCount_271
    memberMetric_271
  }
`);

type FragmentResult832 = ResultOf<typeof FRAGMENT_832>;
type FragmentSelf832 = NonNullable<FragmentResult832>;

export type FragmentToken832 =
  | FragmentSelf832["__typename"]
  | FragmentSelf832["typenameHint"] | FragmentToken830 | FragmentToken831;
