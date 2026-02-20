import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2055 } from "./fragment2055";
import type { FragmentToken2056 } from "./fragment2056";

export const FRAGMENT_2057 = gql(`
  fragment Fragment2057 on Member96 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_96
    memberCount_96
    memberMetric_96
  }
`);

type FragmentResult2057 = ResultOf<typeof FRAGMENT_2057>;
type FragmentSelf2057 = NonNullable<FragmentResult2057>;

export type FragmentToken2057 =
  | FragmentSelf2057["__typename"]
  | FragmentSelf2057["typenameHint"] | FragmentToken2055 | FragmentToken2056;
