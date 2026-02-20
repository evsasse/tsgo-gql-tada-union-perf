import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken334 } from "./fragment334";
import type { FragmentToken335 } from "./fragment335";

export const FRAGMENT_336 = gql(`
  fragment Fragment336 on Member55 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_55
    memberCount_55
    memberMetric_55
  }
`);

type FragmentResult336 = ResultOf<typeof FRAGMENT_336>;
type FragmentSelf336 = NonNullable<FragmentResult336>;

export type FragmentToken336 =
  | FragmentSelf336["__typename"]
  | FragmentSelf336["typenameHint"] | FragmentToken334 | FragmentToken335;
