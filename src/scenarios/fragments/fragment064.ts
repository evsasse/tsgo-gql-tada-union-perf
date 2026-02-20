import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken062 } from "./fragment062";
import type { FragmentToken063 } from "./fragment063";

export const FRAGMENT_064 = gql(`
  fragment Fragment064 on Member63 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_63
    memberCount_63
    memberMetric_63
  }
`);

type FragmentResult064 = ResultOf<typeof FRAGMENT_064>;
type FragmentSelf064 = NonNullable<FragmentResult064>;

export type FragmentToken064 =
  | FragmentSelf064["__typename"]
  | FragmentSelf064["typenameHint"] | FragmentToken062 | FragmentToken063;
