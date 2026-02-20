import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken206 } from "./fragment206";
import type { FragmentToken207 } from "./fragment207";

export const FRAGMENT_208 = gql(`
  fragment Fragment208 on Member207 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_207
    memberCount_207
    memberMetric_207
  }
`);

type FragmentResult208 = ResultOf<typeof FRAGMENT_208>;
type FragmentSelf208 = NonNullable<FragmentResult208>;

export type FragmentToken208 =
  | FragmentSelf208["__typename"]
  | FragmentSelf208["typenameHint"] | FragmentToken206 | FragmentToken207;
