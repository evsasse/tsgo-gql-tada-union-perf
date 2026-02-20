import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken825 } from "./fragment825";
import type { FragmentToken826 } from "./fragment826";

export const FRAGMENT_827 = gql(`
  fragment Fragment827 on Member266 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_266
    memberCount_266
    memberMetric_266
  }
`);

type FragmentResult827 = ResultOf<typeof FRAGMENT_827>;
type FragmentSelf827 = NonNullable<FragmentResult827>;

export type FragmentToken827 =
  | FragmentSelf827["__typename"]
  | FragmentSelf827["typenameHint"] | FragmentToken825 | FragmentToken826;
