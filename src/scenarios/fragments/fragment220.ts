import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken218 } from "./fragment218";
import type { FragmentToken219 } from "./fragment219";

export const FRAGMENT_220 = gql(`
  fragment Fragment220 on Member219 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_219
    memberCount_219
    memberMetric_219
  }
`);

type FragmentResult220 = ResultOf<typeof FRAGMENT_220>;
type FragmentSelf220 = NonNullable<FragmentResult220>;

export type FragmentToken220 =
  | FragmentSelf220["__typename"]
  | FragmentSelf220["typenameHint"] | FragmentToken218 | FragmentToken219;
