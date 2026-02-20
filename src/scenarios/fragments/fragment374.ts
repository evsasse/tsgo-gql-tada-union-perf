import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken372 } from "./fragment372";
import type { FragmentToken373 } from "./fragment373";

export const FRAGMENT_374 = gql(`
  fragment Fragment374 on Member93 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_93
    memberCount_93
    memberMetric_93
  }
`);

type FragmentResult374 = ResultOf<typeof FRAGMENT_374>;
type FragmentSelf374 = NonNullable<FragmentResult374>;

export type FragmentToken374 =
  | FragmentSelf374["__typename"]
  | FragmentSelf374["typenameHint"] | FragmentToken372 | FragmentToken373;
