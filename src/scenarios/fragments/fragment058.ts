import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken056 } from "./fragment056";
import type { FragmentToken057 } from "./fragment057";

export const FRAGMENT_058 = gql(`
  fragment Fragment058 on Member57 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_57
    memberCount_57
    memberMetric_57
  }
`);

type FragmentResult058 = ResultOf<typeof FRAGMENT_058>;
type FragmentSelf058 = NonNullable<FragmentResult058>;

export type FragmentToken058 =
  | FragmentSelf058["__typename"]
  | FragmentSelf058["typenameHint"] | FragmentToken056 | FragmentToken057;
