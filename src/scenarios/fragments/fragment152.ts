import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken150 } from "./fragment150";
import type { FragmentToken151 } from "./fragment151";

export const FRAGMENT_152 = gql(`
  fragment Fragment152 on Member151 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_151
    memberCount_151
    memberMetric_151
  }
`);

type FragmentResult152 = ResultOf<typeof FRAGMENT_152>;
type FragmentSelf152 = NonNullable<FragmentResult152>;

export type FragmentToken152 =
  | FragmentSelf152["__typename"]
  | FragmentSelf152["typenameHint"] | FragmentToken150 | FragmentToken151;
