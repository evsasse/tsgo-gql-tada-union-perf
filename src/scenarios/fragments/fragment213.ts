import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken211 } from "./fragment211";
import type { FragmentToken212 } from "./fragment212";

export const FRAGMENT_213 = gql(`
  fragment Fragment213 on Member212 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_212
    memberCount_212
    memberMetric_212
  }
`);

type FragmentResult213 = ResultOf<typeof FRAGMENT_213>;
type FragmentSelf213 = NonNullable<FragmentResult213>;

export type FragmentToken213 =
  | FragmentSelf213["__typename"]
  | FragmentSelf213["typenameHint"] | FragmentToken211 | FragmentToken212;
