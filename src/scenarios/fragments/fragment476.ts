import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken474 } from "./fragment474";
import type { FragmentToken475 } from "./fragment475";

export const FRAGMENT_476 = gql(`
  fragment Fragment476 on Member195 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_195
    memberCount_195
    memberMetric_195
  }
`);

type FragmentResult476 = ResultOf<typeof FRAGMENT_476>;
type FragmentSelf476 = NonNullable<FragmentResult476>;

export type FragmentToken476 =
  | FragmentSelf476["__typename"]
  | FragmentSelf476["typenameHint"] | FragmentToken474 | FragmentToken475;
