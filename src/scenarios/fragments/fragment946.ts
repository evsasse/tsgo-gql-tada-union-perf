import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken944 } from "./fragment944";
import type { FragmentToken945 } from "./fragment945";

export const FRAGMENT_946 = gql(`
  fragment Fragment946 on Member105 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_105
    memberCount_105
    memberMetric_105
  }
`);

type FragmentResult946 = ResultOf<typeof FRAGMENT_946>;
type FragmentSelf946 = NonNullable<FragmentResult946>;

export type FragmentToken946 =
  | FragmentSelf946["__typename"]
  | FragmentSelf946["typenameHint"] | FragmentToken944 | FragmentToken945;
