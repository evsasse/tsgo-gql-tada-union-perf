import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken356 } from "./fragment356";
import type { FragmentToken357 } from "./fragment357";

export const FRAGMENT_358 = gql(`
  fragment Fragment358 on Member77 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_77
    memberCount_77
    memberMetric_77
  }
`);

type FragmentResult358 = ResultOf<typeof FRAGMENT_358>;
type FragmentSelf358 = NonNullable<FragmentResult358>;

export type FragmentToken358 =
  | FragmentSelf358["__typename"]
  | FragmentSelf358["typenameHint"] | FragmentToken356 | FragmentToken357;
