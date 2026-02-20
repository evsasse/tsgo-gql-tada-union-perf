import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken339 } from "./fragment339";
import type { FragmentToken340 } from "./fragment340";

export const FRAGMENT_341 = gql(`
  fragment Fragment341 on Member60 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_60
    memberCount_60
    memberMetric_60
  }
`);

type FragmentResult341 = ResultOf<typeof FRAGMENT_341>;
type FragmentSelf341 = NonNullable<FragmentResult341>;

export type FragmentToken341 =
  | FragmentSelf341["__typename"]
  | FragmentSelf341["typenameHint"] | FragmentToken339 | FragmentToken340;
