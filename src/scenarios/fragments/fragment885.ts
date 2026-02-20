import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken883 } from "./fragment883";
import type { FragmentToken884 } from "./fragment884";

export const FRAGMENT_885 = gql(`
  fragment Fragment885 on Member44 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_44
    memberCount_44
    memberMetric_44
  }
`);

type FragmentResult885 = ResultOf<typeof FRAGMENT_885>;
type FragmentSelf885 = NonNullable<FragmentResult885>;

export type FragmentToken885 =
  | FragmentSelf885["__typename"]
  | FragmentSelf885["typenameHint"] | FragmentToken883 | FragmentToken884;
