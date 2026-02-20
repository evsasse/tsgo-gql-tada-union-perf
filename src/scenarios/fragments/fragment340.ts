import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken338 } from "./fragment338";
import type { FragmentToken339 } from "./fragment339";

export const FRAGMENT_340 = gql(`
  fragment Fragment340 on Member59 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_59
    memberCount_59
    memberMetric_59
  }
`);

type FragmentResult340 = ResultOf<typeof FRAGMENT_340>;
type FragmentSelf340 = NonNullable<FragmentResult340>;

export type FragmentToken340 =
  | FragmentSelf340["__typename"]
  | FragmentSelf340["typenameHint"] | FragmentToken338 | FragmentToken339;
