import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken903 } from "./fragment903";
import type { FragmentToken904 } from "./fragment904";

export const FRAGMENT_905 = gql(`
  fragment Fragment905 on Member64 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_64
    memberCount_64
    memberMetric_64
  }
`);

type FragmentResult905 = ResultOf<typeof FRAGMENT_905>;
type FragmentSelf905 = NonNullable<FragmentResult905>;

export type FragmentToken905 =
  | FragmentSelf905["__typename"]
  | FragmentSelf905["typenameHint"] | FragmentToken903 | FragmentToken904;
