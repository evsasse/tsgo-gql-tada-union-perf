import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken357 } from "./fragment357";
import type { FragmentToken358 } from "./fragment358";

export const FRAGMENT_359 = gql(`
  fragment Fragment359 on Member78 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_78
    memberCount_78
    memberMetric_78
  }
`);

type FragmentResult359 = ResultOf<typeof FRAGMENT_359>;
type FragmentSelf359 = NonNullable<FragmentResult359>;

export type FragmentToken359 =
  | FragmentSelf359["__typename"]
  | FragmentSelf359["typenameHint"] | FragmentToken357 | FragmentToken358;
